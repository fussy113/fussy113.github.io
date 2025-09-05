#!/usr/bin/env bash

set -e

npm install

npm install -g @anthropic-ai/claude-code

# install pinact
go install github.com/suzuki-shunsuke/pinact/cmd/pinact@latest
