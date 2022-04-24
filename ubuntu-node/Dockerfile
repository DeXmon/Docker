FROM ubuntu
RUN apt-get update
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install nodejs -y
WORKDIR /opt/node-app/
COPY index.js /opt/node-app/
ENV creater=DeXmon
# CMD ["node","/opt/node-app/index.js"]
CMD ["node","index.js"]
