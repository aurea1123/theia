cmd_Release/obj.target/ffmpeg/src/ffmpeg.o := cc '-DNODE_GYP_MODULE_NAME=ffmpeg' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DNAPI_VERSION=2' '-DBUILDING_NODE_EXTENSION' -I/home/gitpod/.node-gyp/10.16.3/include/node -I/home/gitpod/.node-gyp/10.16.3/src -I/home/gitpod/.node-gyp/10.16.3/deps/openssl/config -I/home/gitpod/.node-gyp/10.16.3/deps/openssl/openssl/include -I/home/gitpod/.node-gyp/10.16.3/deps/uv/include -I/home/gitpod/.node-gyp/10.16.3/deps/zlib -I/home/gitpod/.node-gyp/10.16.3/deps/v8/include  -fPIC -pthread -Wall -Wextra -Wno-unused-parameter -m64 -O3 -fno-omit-frame-pointer  -MMD -MF ./Release/.deps/Release/obj.target/ffmpeg/src/ffmpeg.o.d.raw   -c -o Release/obj.target/ffmpeg/src/ffmpeg.o ../src/ffmpeg.c
Release/obj.target/ffmpeg/src/ffmpeg.o: ../src/ffmpeg.c \
 /home/gitpod/.node-gyp/10.16.3/include/node/node_api.h \
 /home/gitpod/.node-gyp/10.16.3/include/node/node_api_types.h \
 ../src/ffmpeg.h
../src/ffmpeg.c:
/home/gitpod/.node-gyp/10.16.3/include/node/node_api.h:
/home/gitpod/.node-gyp/10.16.3/include/node/node_api_types.h:
../src/ffmpeg.h:
