function FlightCrash(tc,name,age)
{
    //Enter code here
    for(let i=0;i<age.length;i++)
    {
        if(age[i] === "old")
        {
            console.log(name[i])
            age.slice(i,1)
            name.slice(i,1)
        }
    }
    for(let i=0;i<age.length;i++)
    {
        if(age[i] === "woman" || age[i] === "child")
        {
            console.log(name[i])
            age.slice(i,1)
            name.slice(i,1)
        }
    }
     for(let i=0;i<age.length;i++)
    {
        if(age[i] === "man")
        {
            console.log(name[i])
            age.slice(i,1)
            name.slice(i,1)
        }
    }
    for(let i=0;i<age.length;i++)
    {
        if(age[i] === "crew")
        {
            console.log(name[i])
            age.slice(i,1)
            name.slice(i,1)
        }
    }
}

//******* input ********

function runProgram(input) {
    // write your code here
    input = input.split("\n")
    let tc = +input[0]
    let line = 1
    let name = []
    let age = []
    for(let i=0;i<tc;i++)
    {
        let temp = input[line].split(" ")
        name.push(temp[0])
        age.push(temp[1])
        line ++
    }
    FlightCrash(tc,name,age)

 }
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}