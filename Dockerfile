FROM debian:bullseye-slim@sha256:8717ec90aa91e5980b54b7025c2063d6bcbf3ac3d266bb455e4088cc777410c6 as build 

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install wget \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

ARG HUGO_VERSION="0.136.0"
RUN wget "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz" \
    && tar -xvf hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz hugo \
    && mv  hugo /usr/bin \
    && rm hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz

ADD https://github.com/cds-snc/static-content-lambda/raw/main/release/latest/lambda-static-server /lambda-static-server
RUN chmod 755 /lambda-static-server

COPY ./ /site
WORKDIR /site
RUN hugo --environment staging

FROM scratch

COPY --from=build /site/public /var/www/html
COPY --from=build /lambda-static-server /lambda-static-server

ENTRYPOINT [ "/lambda-static-server" ]
