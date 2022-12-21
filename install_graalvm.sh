cd /home/mickael
wget https://github.com/graalvm/graalvm-ce-builds/releases/download/vm-22.3.0/graalvm-ce-java17-linux-amd64-22.3.0.tar.gz
tar -xzf graalvm-ce-java17-linux-amd64-22.3.0.tar.gz
rm graalvm-ce-java17-linux-amd64-22.3.0.tar.gz
export PATH=/home/mickael/graalvm-ce-java17-22.3.0/bin:$PATH
export JAVA_HOME=/home/mickael/graalvm-ce-java17-22.3.0
gu install native-image
export GRAALVM_HOME=/home/mickael/graalvm-ce-java17-22.3.0

