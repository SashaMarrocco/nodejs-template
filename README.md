# DOCKER JS TEMPLATE

Quick Node 12 prototyping template.

## Stack

- Node 12 
- Jest / Eslint / Prettier

## Requirements

- Chrome for debugging
- Docker / Docker-compose
- make
    - Debian: apt-get install build-essential
    - OSX: Preferences -> Downloads -> Components -> Command Line Tools
    - Windows: choco install make

## Boostraping

```
# in terminal #1
make up

# in terminal #2 (pick one)
make lint
make pretty
make test
make coverage
make tdd
make tddc

# if you need to debug, in terminal #3
make debug
```