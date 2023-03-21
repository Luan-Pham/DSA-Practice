/** 

 1- Fix Windows 
Given an Array of int, Find the sum maximum continguous subarray of size 3 
ARRAY = 4  2  1  7  8  1  2  8 1 0              K=3 
                    R
            C
TEMP
OPTIMAL


1- In which conditions does our runner run?
A- As long as we are still in bounds, 
  Increment the R until R - c = k-1(get the subarray/window size of k)
   
2- When to record our temporary solution?
A- each time we get the window size of k, we can record a temporary solution
3- How to choose our Optimal Solution?
A-  compare the temp solution with the optimal and then set the optimal to the max of the two,
  do this each time we get a new temp solution
4- In which conditions does our catcher run?
A- After we compare the solutions, we can increment the catcher by 1


        counter 
        C=0
        TEMP
        OPT


        for ( R TO ARRAY.LENGHT)
          IF (COUNTER < 3)
             COUNTER++
             TEMP = TEMP+ARR[R]
          ELSE
             OPT = OPT>TEMP ? OPT: TEMP
             COUNTER --
             TEMP = TEMP -ARR[C]
             C++
        RETURN OPT
           

2- Dynamic Windows. 

Given.... find the smallest subarray with sum >=8
4 2 2 7 4 1 2 1 1 0 5
                    R
                    C


TEMP    4  =  
OPT

1- In which conditions does our runner run? 
   runner will run - until we have sum (r-c) >= target
                    - As long as we are still in bounds 
2- When to record our temporary solution?
A-  when we have sum (r-c) >= target, record the length of r-c
3- How to choose our Optimal Solution?
A- compare the temp solution with the optimal and then set the optimal to the max of the two
4- In which conditions does our catcher run?
A- after we compare the solutions, run until r-c is less than the target
   
opt>temp? opt: temp;


*/


const maxSubArray = (arr) => {
    let temp
    let opt
    let counter = 0
    for (let i = 0; i <=array.length;i++){
      if(counter < 3 ){
        counter++
        temp = temp + arr[c]
      }
    }
    
      
    
      
    }