#!/bin/bash
git clone git@github.com:luapdever/NODETEMP.git

CUR_DIR=$(pwd)
if [ -d "$CUR_DIR/NODETEMP" ]; then
    echo "Node template cloned at $CUR_DIR "
    echo "------------------------------------------------"
    
    if [ "" != "$1" ]; then
        mv "$CUR_DIR/NODETEMP" "$CUR_DIR/$1"
    else
        echo "Enter project name"
        read projectName
        mv "$CUR_DIR/NODETEMP" "$CUR_DIR/$projectName"
    fi

    echo "Success. Finished"
else
    echo "Operation failed...";
fi