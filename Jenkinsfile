pipeline {
  agent any
  options {
    timeout(time: 1, unit: 'HOURS')
  }
  stages {
    stage('Initialize') {
      steps {
        initialize_function()
      }
    }
    stage('Test') {
      steps {
        test_function()
      }
    }
  }
  post {
    always {
      cleanup_function()
    }
  }
}

def initialize_function() {
  // PLEASE ONLY MODIFY VALUES IN THIS FUNCTION!!!!!
  env.TEST_DOCKER_IMAGE = 'node:6.11.5'
  env.APP_NAME = 'ui-grid'
}

def test_function() {
  docker.image(env.TEST_DOCKER_IMAGE).inside('-u root') {
    sh 'cp -rT $WORKSPACE /code'
    sh 'cd /code && yarn && yarn test'
  }
}

def cleanup_function() {
  sh 'sudo rm -rf $WORKSPACE/build'
  sh 'sudo rm -rf $WORKSPACE/node_modules'
}
