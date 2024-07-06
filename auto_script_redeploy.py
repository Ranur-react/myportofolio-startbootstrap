import subprocess

def run_command(command):
    """Run a shell command and print its output."""
    result = subprocess.run(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, universal_newlines=True)
    if result.returncode != 0:
        print("Error running command: {}".format(command))
        print(result.stderr)
    else:
        print(result.stdout)
    return result

def main():
    commands = [
        "git pull",
        "docker stop nginx4",
        "docker rm nginx4",
        "docker rmi nginx-service",
        "docker build -t nginx-service .",
        "docker run -d --name nginx4 -p 213:22 -p 3004:80 nginx-service"
    ]

    for command in commands:
        run_command(command)

if __name__ == "__main__":
    main()
