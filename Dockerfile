FROM node

ENV HOME=/home/node

RUN mkdir $HOME/app

# Add to the path env variable so we can find our github search binary
ENV PATH "$PATH:$HOME/app/bin"

COPY package.json yarn.lock $HOME/app/

WORKDIR $HOME/app

RUN yarn install --non-interactive --production