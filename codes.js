
module.exports = {
    answer: [`/**
    * 
    * Problem Statement-
    * [Solve Me First](https://www.hackerrank.com/challenges/solve-me-first) 
    * [Tutorial](https://youtu.be/iHhFPu7h7Ic) 
    * 
    */
   package com.javaaid.hackerrank.solutions.generalprogramming.basicprogramming;
   import java.util.Scanner;
   
   /**
    * 
    * @author Kanahaiya Gupta
    *
    */
   public class SolveMeFirst {
   
       static int solveMeFirst(int a, int b) {
           return a+b;
      }
   
      
    public static void main(String[] args) {
           Scanner in = new Scanner(System.in);
           int a;
           a = in.nextInt();
           int b;
           b = in.nextInt();
           int sum;
           sum = solveMeFirst(a, b);
           System.out.println(sum);
           in.close();
      }
   }`,`/**
   * 
   * Problem Statement-
   * [Simple Array Sum](https://www.hackerrank.com/challenges/simple-array-sum/problem)   
   * [Tutorial](https://youtu.be/bRtxlFZmVZU) 
   * 
   */
  package com.javaaid.hackerrank.solutions.generalprogramming.basicprogramming;
  
  import java.util.Scanner;
  
  /**
   * @author Kanahaiya Gupta
   *
   */
  public class SimpleArraySum {
      public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);
          int noOfElements = sc.nextInt();
          int sum = 0;
          for (int i = 0; i < noOfElements; i++) {
              sum = sum + sc.nextInt();
          }
          System.out.println(sum);
          sc.close();
      }
  }`,`/**
  * 
  * Problem Statement-
  * [Compare the Triplets](https://www.hackerrank.com/challenges/compare-the-triplets/problem)    
  * [Tutorial]([Tutorial](https://youtu.be/rFUZAtwXiII) 
  * 
  */
 package com.javaaid.hackerrank.solutions.generalprogramming.basicprogramming;
 
 import java.util.ArrayList;
 import java.util.List;
 import java.util.Scanner;
 
 /**
  * @author Kanahaiya Gupta
  *
  */
 public class CompareTheTriplets {
 
     static List<Integer> compareTriplets(List<Integer> a, List<Integer> b) {
         int aliceTotalScore = 0, bobTotalScore = 0;
 
         for (int i = 0; i < 3; i++) {
             int aliceScore = a.get(i);
             int bobScore = b.get(i);
             if (aliceScore != bobScore) {
                 int temp = aliceScore > bobScore ? aliceTotalScore++ : bobTotalScore++;
             }
 
         }
         List<Integer> result = new ArrayList<>();
         result.add(aliceTotalScore);
         result.add(bobTotalScore);
         return result;
     }
 
 }`,`/**
 * 
 * Problem Statement-
 * [A Very Big Sum](https://www.hackerrank.com/challenges/a-very-big-sum)   
 * [Tutorial](https://youtu.be/GwfSRZB1ZJM) 
 * 
 */
package com.javaaid.hackerrank.solutions.generalprogramming.basicprogramming;

import java.util.Scanner;

/**
 * @author Kanahaiya Gupta
 *
 */
public class AVeryBigSum {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		int n = in.nextInt();
		long sum = 0;

		for (int arr_i = 0; arr_i < n; arr_i++) {
			sum += in.nextLong();
		}
		System.out.println(sum);
		in.close();

	}
}`,`/**
* 
* Problem Statement-
* [Diagonal Difference](https://www.hackerrank.com/challenges/diagonal-difference)
* [Tutorial](https://youtu.be/f6bTIsj9ne8) 
* 
*/
package com.javaaid.hackerrank.solutions.generalprogramming.basicprogramming;

/**
* 
* @author Kanahaiya Gupta
*
*/
public class DiagonalDifference {
   
   static int diagonalDifference(int[][] arr) {
       int leftSum = 0, rightSum = 0;
       int n = arr.length;
       for (int i = 0; i < n; i++) {
           leftSum += arr[i][i];
           rightSum += arr[i][n - 1 - i];
       }
       return (Math.abs(leftSum - rightSum));
   }
}`,`/**
* 
* Problem Statement-
* [Plus Minus](https://www.hackerrank.com/challenges/plus-minus)
* [Tutorial](https://youtu.be/aLS4HYPfzUw) 
* 
*/
package com.javaaid.hackerrank.solutions.generalprogramming.basicprogramming;

import java.util.Scanner;

/**
* 
* @author Kanahaiya Gupta
*
*/
public class PlusMinus {
   public static void main(String[] args) {
       Scanner in = new Scanner(System.in);
       int n = in.nextInt();
       int arr[] = new int[n];
       float countPositive = 0;
       float countNegetive = 0;
       float countZero = 0;
       for (int arr_i = 0; arr_i < n; arr_i++) {
           arr[arr_i] = in.nextInt();
           if (arr[arr_i] < 0) {
               countNegetive++;
           }
           if (arr[arr_i] > 0) {
               countPositive++;
           }
           if (arr[arr_i] == 0) {
               countZero++;
           }
       }
       System.out.printf("%1.6f \n", countPositive / n);
       System.out.printf("%1.6f \n", countNegetive / n);
       System.out.printf("%1.6f \n", countZero / n);
       in.close();
   }
}`,`/**
* 
* Problem Statement-
* [Staircase](https://www.hackerrank.com/challenges/staircase) 
* [Tutorial](https://youtu.be/gDltV7pJw7A) 
* 
*/
package com.javaaid.hackerrank.solutions.generalprogramming.basicprogramming;

import java.util.Scanner;

/**
* @author Kanahaiya Gupta
*
*/
public class Staircase {
   public static void main(String[] args) {
       Scanner in = new Scanner(System.in);
       int n = in.nextInt();
       String str = "#";
       for (int i = 0; i < n; i++) {
           System.out.printf("%" + (n) + "s \n", str);
           str += "#";
       }
       in.close();
   }
}`,`/**
* 
* Problem Statement-
* [Mini-Max Sum](https://www.hackerrank.com/challenges/mini-max-sum/problem)    
* [Tutorial](https://youtu.be/CNL1WzrtxGY)  
* 
*/
package com.javaaid.hackerrank.solutions.generalprogramming.basicprogramming;

/**
* @author Kanahaiya Gupta
*
*/
public class MiniMaxSum {
   static void miniMaxSum(int[] arr) {
       long min = 0, max = 0, sum = 0;
       min = arr[0];
       max = min;
       sum = min;
       for (int i = 1; i < arr.length; i++) {
           sum += arr[i];
           if (arr[i] < min) {
               min = arr[i];
           }
           if (arr[i] > max) {
               max = arr[i];
           }
       }
       System.out.print((sum - max) + " " + (sum - min));

   }

}`,`/**
* 
* Problem Statement-
* [Birthday Cake Candles](https://www.hackerrank.com/challenges/birthday-cake-candles/problem)    
* [Tutorial](https://youtu.be/1gxFE9EfanE)  
* 
*/
package com.javaaid.hackerrank.solutions.generalprogramming.basicprogramming;

import java.util.Scanner;

/**
* @author Kanahaiya Gupta
*
*/
public class BirthdayCakeCandles {
   static int birthdayCakeCandles(int[] ar) {
       int maxCandleHeight = Integer.MIN_VALUE;
       int maxCandleFreqCount = 0;

       for (int i = 0; i < ar.length; i++) {

           if (ar[i] == maxCandleHeight) {
               maxCandleFreqCount++;
           }

           if (ar[i] > maxCandleHeight) {
               maxCandleHeight = ar[i];
               maxCandleFreqCount = 1;
           }

       }
       return maxCandleFreqCount;

   }

   public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);
       int M = sc.nextInt();
       int a[] = new int[M];
       for (int i = 0; i < M; i++) {
           a[i] = sc.nextInt();
       }
       System.out.println(birthdayCakeCandles(a));
       sc.close();
   }

}`,`/**
* 
* Problem Statement-
* [Time Conversion](https://www.hackerrank.com/challenges/time-conversion/problem)     
* [Tutorial](https://youtu.be/MFvX3sLsHNY)   
* 
*/
package com.javaaid.hackerrank.solutions.generalprogramming.basicprogramming;

/**
* @author Kanahaiya Gupta
*
*/
public class TimeConversion {
   static String timeConversion(String s) {
       String[] str = s.split(":");
       int hour = Integer.parseInt(str[0]);

       String min = str[1];
       String secPeriod = str[2];
       String sec = str[2].substring(0, secPeriod.length() - 2);
       String period = str[2].substring(secPeriod.length() - 2, secPeriod.length());

       String newTimeINString = "";

       if ((0 <= hour && hour < 12) && (period.equalsIgnoreCase("AM"))) {
           newTimeINString = String.format("%02d", hour) + ":" + min + ":" + sec;
       } else if ((0 <= hour && hour < 12) && period.equalsIgnoreCase("PM")) {
           newTimeINString = (12 + hour) + ":" + min + ":" + sec;

       } else if ((hour == 12) && (period.equalsIgnoreCase("AM"))) {
           newTimeINString = "00" + ":" + min + ":" + sec;
       } else if ((hour == 12) && (period.equalsIgnoreCase("PM"))) {
           newTimeINString = hour + ":" + min + ":" + sec;
       }
       return newTimeINString;
   }

}`],
  };