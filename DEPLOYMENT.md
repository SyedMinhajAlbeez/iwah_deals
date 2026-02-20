# 🚀 VPS Deployment - Quick Start Guide

## Prerequisites Checklist

Before deploying to VPS, ensure you have:

- [ ] VPS with Ubuntu 20.04+ (2GB RAM minimum, 4GB recommended)
- [ ] Root/sudo access to the VPS
- [ ] Domain name pointing to your VPS IP address
- [ ] SSH access configured

## Quick Deployment Steps

### 1. Prepare Your VPS

SSH into your VPS and run:

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 and Nginx
sudo npm install -g pm2
sudo apt install nginx -y

# Setup firewall
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

### 2. Upload Project Files

**Option A: Using Git (Recommended)**
```bash
cd /var/www
sudo git clone <your-repo-url> storefront
sudo chown -R $USER:$USER /var/www/storefront
cd storefront
```

**Option B: Using SCP**
```bash
# From your local machine
scp -r C:\xampp\htdocs\trad\storefront user@your-vps-ip:/var/www/
```

### 3. Configure Environment

```bash
cd /var/www/storefront

# Copy and edit production environment
cp .env.production .env.local
nano .env.local
```

**Update these values:**
- `NEXT_PUBLIC_NEXT_AUTH_URL=http://localhost:3000/` (Keep as is per your request)
- `NEXT_PUBLIC_NEXT_AUTH_SECRET=` (generate with: `openssl rand -base64 32`)

### 4. Run Deployment Script

```bash
chmod +x deploy.sh
./deploy.sh
```

The script will:
- ✅ Install dependencies
- ✅ Build the application
- ✅ Start with PM2
- ✅ Configure auto-restart

### 5. Configure Nginx

```bash
sudo nano /etc/nginx/sites-available/storefront
```

Paste this configuration (replace `your-domain.com`):

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and restart:

```bash
sudo ln -s /etc/nginx/sites-available/storefront /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 6. Setup SSL Certificate

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Verification

```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs bagisto-storefront

# Test application
curl http://localhost:3000
curl https://your-domain.com
```

## Common Commands

```bash
# Restart application
pm2 restart bagisto-storefront

# View logs
pm2 logs bagisto-storefront

# Monitor resources
pm2 monit

# Update deployment
git pull origin main
npm ci --production=false
npm run build
pm2 reload ecosystem.config.js
```

## Troubleshooting

**Build fails?**
```bash
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

**Port 3000 in use?**
```bash
sudo lsof -i :3000
sudo kill -9 <PID>
```

**502 Bad Gateway?**
```bash
pm2 restart bagisto-storefront
sudo systemctl restart nginx
```

## Need Help?

📖 See [implementation_plan.md](./implementation_plan.md) for detailed instructions

---

**Current Configuration:**
- Backend: `https://admin.iwahdeals.com/public/graphql`
- Storefront Key: Pre-configured
- Port: 3000 (internal)
- Process Manager: PM2 (cluster mode)
