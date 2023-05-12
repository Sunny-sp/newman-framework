# newman-framework
This framework is used to exeute API test cases written in POSTMAN

# Steps to run API test cases using Newman
- **Create** a new branch using: checkout branch -b "branch_name"
- **Export** colletion.json file into src/data/collections folder
- **Export** environment.json file into src/data/environments folder
- **Edit** the path in src/config/testConfig file, and provide filenames for collection.json and environment.json at (---).
  
 **const collection_Path = 'src/data/collections/---.json';**
 
 **environment_Path = 'src/data/environments/---.json';**
- Install node_modules by running command: **npm install**
- Run command: **npm run test**
<img width="797" alt="image" src="https://github.com/Sunny-sp/newman-framework/assets/105594569/1cc35eb6-7b6f-492b-af15-8162168e73b4">

# Run test cases with specific environment **(qa/dev/local/prod)**
- create environment variable by running command in terminal: **export ENVIRONMENT=qa**
- check environment variable set properly: **echo $ENVIRONMENT**
- run test-script with this environment variable: **npm run test -e ENVIRONMENT**
