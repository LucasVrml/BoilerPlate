#!/bin/bash

echo ""
echo "🚀 Starting DEV environment for STILL DEEP..."
echo "##############################################"
echo ""

# Stop existing containers
echo "🧹 Step 1: Stopping containers (if any)..."

read -p "Do you want to reset volumes (reset DB)? (y/N): " reset
if [[ "$reset" == "y" || "$reset" == "Y" ]]; then
  docker compose down -v --remove-orphans
else
  docker compose down --remove-orphans
fi

# # Clean exited containers
# echo "🧼 Step 2: Removing exited containers..."
# docker rm $(docker ps -a -f status=exited -q) 2>/dev/null

# # Clean unused images
# echo "🧽 Step 3: Removing unused images..."
# docker rmi $(docker images -a -q) 2>/dev/null

# # Clean dangling volumes
# echo "🗑️ Step 4: Removing dangling volumes..."
# docker volume rm $(docker volume ls -qf dangling=true) 2>/dev/null

# Build Docker images
echo ""
echo "🔧 Step 5: Building containers..."
docker compose build

# Start containers
echo ""
echo "🟢 Step 6: Starting development environment..."
docker compose up -d

docker compose exec server node build/ace migration:run --force  

# Final usage info
echo ""
echo "✅ STILL DEEP is now running!"
echo ""
echo "🧠 client   → http://localhost:5173"
echo ""
echo "🧠 server    → http://localhost:3333"
echo ""
