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
            steps{
               echo "Building the application" 
            }
            
        }
        stage('Testing'){
            steps{
                echo "Testing the application" 
                bat "npm i"
                bat "npx cypress run --browser ${Browser} --spec ${SPEC}"
            }
        }
        stage('Deploying'){
            steps{
                echo "Deploying the application" 
            }
           
        }
    }
}   
