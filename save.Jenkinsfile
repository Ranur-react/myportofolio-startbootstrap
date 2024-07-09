pipeline {
    agent any

    stages {
        stage('Clone or Pull Repository') {
            steps {
                script {
                    if (fileExists('myportofolio-startbootstrap')) {
                        dir('myportofolio-startbootstrap') {
                            sh 'git fetch'
                            sh 'git checkout jenkins'
                            sh 'git pull origin jenkins'
                        }
                    } else {
                        sh 'git clone -b jenkins https://github.com/Ranur-react/myportofolio-startbootstrap.git'
                    }
                }
            }
        }
        stage('Remove Old Container') {
            steps {
                script {
                    sh 'docker stop nginx4'
                    sh 'docker rm nginx4'
                }
            }
        }
        stage('Remove Old Image') {
            steps {
                script {
                    sh 'docker rmi nginx-service'
                }
            }
        }
        stage('Build Docker New Image') {
            steps {
                dir('myportofolio-startbootstrap') {
                    sh 'docker build -t nginx-service .'
                }
            }
        }
        stage('Run New Container') {
            steps {
                sh 'docker run -d --name nginx4 -p 214:22 -p 3004:80 nginx-service'
            }
        }
    }
    post {
        always {
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
        }
    }
}