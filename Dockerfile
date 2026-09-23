# ============================================================================
# GOLD-MD — GitLab launcher image (linux/amd64)
#
# This image does NOT contain the bot source. It only contains the launcher
# (index.js). At runtime index.js clones the private GitHub GOLD-MD repo
# (using the embedded token), builds the Go binary, and runs start.sh.
# ============================================================================
FROM golang:1.26-bookworm

RUN apt-get update && apt-get install -y --no-install-recommends \
        git ca-certificates curl ffmpeg python3 python3-pil \
        jpegoptim pngquant poppler-utils \
        libreoffice-writer libreoffice-calc libreoffice-impress \
        nodejs npm \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY index.js package.json ./

# Heroku assigns $PORT at runtime; default kept for local runs.
ENV PORT=11221
ENV SUPERVISOR_ENABLED=1
EXPOSE 11221

CMD ["node", "index.js"]
