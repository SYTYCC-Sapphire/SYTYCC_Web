pipeline {
    agent any
    environment {
		BUILD_DIR = 'gpi-website'
    }
    stages {
        stage('Deploy') {
            steps {
				sh 'sudo anaconda.websites.directories ${BUILD_DIR}'
                sh 'sudo anaconda.websites.ftp ${BUILD_DIR}'
            }
        }
    }
}
