pipeline{
    agent any
    parameters{
        string(name:'SPEC',defaultValue:'cypress/e2e/**', description:'Enter the script path')
        choice(name:'Browser',choices:['chrome','edge','firefox'], description: 'Pickup the browser')
    }
    options{
        ansiColor('xterm')
    }
    stages{
        stage('Building'){
            echo "building the application"
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${Browser} --spec ${SPEC}"
            }
        }
        stage('Depoying'){
            echo "Deploy the application"
        }
    }
}   
