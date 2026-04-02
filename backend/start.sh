#!/bin/bash
exec /usr/local/bin/pocketbase serve --http=0.0.0.0:${PORT:-8080} --dir=/pb/pb_data
