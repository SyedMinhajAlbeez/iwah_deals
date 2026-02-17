#!/bin/bash
# VPS Deployment Script for Bagisto Next.js Storefront
# Run this script on your VPS after uploading the project files

set -e  # Exit on error

echo "🚀 Starting Bagisto Storefront Deployment..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if running as root
if [ "$EUID" -eq 0 ]; then 
   echo -e "${RED}❌ Please do not run this script as root${NC}"
   exit 1
fi

# Configuration
PROJECT_DIR="/var/www/storefront"
NODE_VERSION="20"

echo -e "${YELLOW}📋 Checking prerequisites...${NC}"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}Installing Node.js ${NODE_VERSION}...${NC}"
    curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo -e "${GREEN}✓ Node.js is installed: $(node -v)${NC}"
fi

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}Installing PM2...${NC}"
    sudo npm install -g pm2
else
    echo -e "${GREEN}✓ PM2 is installed${NC}"
fi

# Navigate to project directory
cd $PROJECT_DIR

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo -e "${RED}❌ .env.local file not found!${NC}"
    echo -e "${YELLOW}Please create .env.local from .env.production template${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Environment file found${NC}"

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm ci --production=false

# Build the application
echo -e "${YELLOW}🔨 Building application...${NC}"
npm run build

# Check if build was successful
if [ ! -d ".next" ]; then
    echo -e "${RED}❌ Build failed! .next directory not found${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Build successful${NC}"

# Create logs directory if it doesn't exist
mkdir -p logs

# Stop existing PM2 process if running
if pm2 list | grep -q "bagisto-storefront"; then
    echo -e "${YELLOW}Stopping existing PM2 process...${NC}"
    pm2 stop bagisto-storefront
    pm2 delete bagisto-storefront
fi

# Start with PM2
echo -e "${YELLOW}🚀 Starting application with PM2...${NC}"
pm2 start ecosystem.config.js

# Save PM2 process list
pm2 save

# Setup PM2 startup script
echo -e "${YELLOW}Setting up PM2 startup script...${NC}"
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u $USER --hp $HOME

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo ""
echo -e "${YELLOW}📊 Application Status:${NC}"
pm2 status

echo ""
echo -e "${YELLOW}📝 Next Steps:${NC}"
echo "1. Configure Nginx reverse proxy"
echo "2. Setup SSL certificate with Let's Encrypt"
echo "3. Update DNS records to point to this server"
echo "4. Test the application at your domain"
echo ""
echo -e "${YELLOW}💡 Useful Commands:${NC}"
echo "  pm2 logs bagisto-storefront  - View application logs"
echo "  pm2 restart bagisto-storefront  - Restart application"
echo "  pm2 monit  - Monitor resources"
