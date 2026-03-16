# Deploy On A Proxmox Ubuntu Container

This guide deploys the current Sasquatch Platform app on an Ubuntu container hosted in Proxmox.

Recommended deployment shape:

- Proxmox Ubuntu LXC or VM
- Node.js 22 LTS
- PostgreSQL
- Nginx reverse proxy
- systemd service for the Next.js app

This project is configured to build with Next.js standalone output, so the production server runs from:

- `.next/standalone/server.js`

## 1. Prepare The Ubuntu Container

Update packages:

```bash
sudo apt update
sudo apt upgrade -y
```

Install base packages:

```bash
sudo apt install -y curl git nginx build-essential
```

Install Node.js 22 LTS:

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```

## 2. Install PostgreSQL

If you want PostgreSQL on the same Ubuntu container:

```bash
sudo apt install -y postgresql postgresql-contrib
sudo systemctl enable --now postgresql
```

Create the database and user:

```bash
sudo -u postgres psql
```

Then run these commands inside `psql`:

```sql
CREATE USER sasquatch WITH PASSWORD 'change-this-password';
CREATE DATABASE sasquatch_platform OWNER sasquatch;
\q
```

## 3. Create The App User And Directory

```bash
sudo useradd --system --create-home --shell /bin/bash sasquatch
sudo mkdir -p /opt/sasquatch-platform
sudo chown sasquatch:sasquatch /opt/sasquatch-platform
```

## 4. Clone The Repository

```bash
sudo -u sasquatch git clone https://github.com/Alexeitor292/Sasquatch_Golf_Academy.git /opt/sasquatch-platform
cd /opt/sasquatch-platform
```

## 5. Configure Environment Variables

Copy the example file:

```bash
sudo -u sasquatch cp .env.example .env
```

Edit it:

```bash
sudo -u sasquatch nano .env
```

Minimum values to set correctly:

```env
DATABASE_URL="postgresql://sasquatch:change-this-password@localhost:5432/sasquatch_platform?schema=public"
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="use-a-long-random-secret"
AUTH_TRUST_HOST="true"
```

Important:

- If your PostgreSQL password contains special URL characters like `!`, `@`, `:`, `/`, or `#`, you must URL-encode that password inside `DATABASE_URL`.
- Example: if your password is `Julio292005!`, your `DATABASE_URL` password segment should be `Julio292005%21`.
- To avoid encoding mistakes, it is often easier to use a long password made of letters and numbers only.

If you add Stripe, S3, or SendGrid later, populate those values too.

## 6. Install Dependencies And Build

```bash
sudo -u sasquatch npm ci
sudo -u sasquatch npm run db:generate
sudo -u sasquatch npm run db:push
sudo -u sasquatch npm run db:seed
sudo -u sasquatch npm run build
```

## 7. Install The systemd Service

Copy the included service file:

```bash
sudo cp deploy/systemd/sasquatch-platform.service /etc/systemd/system/sasquatch-platform.service
```

Reload systemd and start the app:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now sasquatch-platform
sudo systemctl status sasquatch-platform
```

Follow logs if needed:

```bash
sudo journalctl -u sasquatch-platform -f
```

## 8. Configure Nginx

Copy the included Nginx config:

```bash
sudo cp deploy/nginx/sasquatch-platform.conf /etc/nginx/sites-available/sasquatch-platform
```

Edit the domain name:

```bash
sudo nano /etc/nginx/sites-available/sasquatch-platform
```

Set:

- `server_name your-domain.com www.your-domain.com;`

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/sasquatch-platform /etc/nginx/sites-enabled/sasquatch-platform
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

## 9. Add HTTPS With Certbot

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## 10. Verify The App

Open:

- `https://your-domain.com`
- `https://your-domain.com/admin`

## Updating The App Later

Pull the latest code and rebuild:

```bash
cd /opt/sasquatch-platform
sudo -u sasquatch git pull origin main
sudo -u sasquatch npm ci
sudo -u sasquatch npm run db:generate
sudo -u sasquatch npm run build
sudo systemctl restart sasquatch-platform
```

If your schema changed:

```bash
sudo -u sasquatch npm run db:push
```

If you need to reseed a non-production environment:

```bash
sudo -u sasquatch npm run db:seed
```

## Notes

- This guide assumes the app and database run on the same Ubuntu host.
- If PostgreSQL lives on another machine, point `DATABASE_URL` there instead.
- The current auth layer is scaffolded, not fully production-complete yet, so make sure `NEXTAUTH_SECRET` is set and admin access is treated carefully until full auth hardening is added.
