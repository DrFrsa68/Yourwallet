FROM alpine:latest

ARG PB_VERSION=0.22.0

RUN apk add --no-cache unzip ca-certificates wget bash

RUN wget https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip \
    && unzip pocketbase_${PB_VERSION}_linux_amd64.zip \
    && rm pocketbase_${PB_VERSION}_linux_amd64.zip \
    && mv pocketbase /usr/local/bin/pocketbase

RUN mkdir -p /pb/pb_data

COPY start.sh /start.sh
RUN chmod +x /start.sh

ENTRYPOINT ["/start.sh"]
