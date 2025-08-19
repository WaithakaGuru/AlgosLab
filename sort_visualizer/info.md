# A website to visualize the mechanisms of different sorting algorithms.

## Title 
This site is called **Sorta**

 ## The Sorting Algorithms Visualized 
    - Bucket Sort
    - Selection Sort 
    - Insertion Sort 
    - Bubble Sort 
    - Heap Sort 
    - Quick Sort 
    - Merge Sort 

## Features 

__Random Unsorted array generation__

- User can select the number of elements in the array to be sorted. 
- User generates a random array of numbers.

**ALgorithm selection**

- User can select the preferred the algorithm to sort the random array with.
- User can select the speed of sorting for easier visualization.

**Algorithm info**

- User gets a full report of: 
    * _The random unsorted Array_
    * _The sorted Array_
    * _The algorithm used_
    * Number of items sorted.
    * Time taken to sort the items.
    * Speed of the sort (which the user set or the default)
    * Average time for a sort pass.
    * Time complexity of the algorithm 
    * Space complexity of the algorithm
    * Number of iterations made during the sort. 
    * Number of swaps made during the sort.

**Algorithm Comparison**

- User can compare the reports of two or more reports of sorting.
- User can view past reports of sorts.
- User can re-visualize a past sort from its report by clicking a reRun button (all the details will be same as those in the report that is,
    - The Algorithm used, the random array)

## Design 

- The home page showing nice sorting images and things related:
    - A call to action for creating an account 
    - A footer

- The signUp and login page with only username, Password and confirm password where necessary 


- A page for visualization with 
    - Input to enter a specific title for the sort.
    - Input to select number of values with a default of 10.
    - A generate Array button

    - Input to select the sorting Algorithm - default quick sort
    - Input to select the sortin speed
    - A run sort Button 

- A page for the report 
    - A search Input to get a report for a particular sort via its title.
    - A filter to filter by :
        - Algorithms
        - age - Today, this week, month, long time ago

- Nice colors and gradients for the viualization dashboard.
 
- An info page with:
    - An interactive graph showing different complexities of algorithms for n items.
    - algorithms details:
        - how it works 
        - its complexity including best cases and average cases
        - use cases 

## Theme colors

- The theme should be Slate gray and something like skybluish blend.
- The dashboard should give a random quote. 
