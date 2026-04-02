FROM alpine:latest
RUN apk add --no-cache wget unzip ca-certificates
RUN wget https://github.com/pocketbase/pocketbase/releases/download/v0.22.0/pocketbase_0.22.0_linux_amd64.zip \
    && unzip pocketbase_0.22.0_linux_amd64.zip \
    && mv pocketbase /usr/local/bin/pocketbase \
    && rm pocketbase_0.22.0_linux_amd64.zip
RUN mkdir -p /pb/pb_data
