# untapt
Q.# untapt's Front End Tech Test

## The Grocery List App

I live with two roommates. We go grocery shopping together every other Tuesday. There are some items that we purchase every week – things like milk, cereal, and a selection of gourmet cheeses. In addition, each of us chooses a different recipe to make that we will eat together as part of a 'family meal.' Keeping track of all of these items is complicated – we need a tool to help us keep track of what to buy. Let's call it _Basket_.

_Basket_ should allow us to:

* Add items (i.e. _Strawberries_) and associated quantities (i.e. _3_) to a shopping list
* Mark items as 'in the basket'
* Clear 'in the basket' items from the list

_(Note: For the purposes of this exercise, it is safe to assume that all quantities are measured in integers. For example, it's okay to add "3 Corn" or "1 Milk". No need to worry about Cups or Pounds or Ears.)_

As a final step, you should add a feature to _Basket_ that will improve the usefulness of your application. It can be anything. Surprise us! (Hint: ideally, this feature also allows you to show off an interesting programming paradigm.)


Approach : After going through the question most basic approach I went for was create a to do list for keeping track of the items necessary for the family meal.

Tools used : Notepad++, Git and Photoshop for framework design.

Languages used : HTML, CSS, AngularJS

Functioning of the application: There are 2 input fields for the friends to add in the items with the quantity. A few regularly purchased items have been preloaded in the shopping list as an array of items. The Shopping list has the list of items the friends would want to add in a list to remember what they have to get based on the recipes they have thought about making. The Basket is the repostory of items which have been checked or puchased. Items in the shopping list can be modified by clicking on the name of the item. Items in the basket can be removed by clicking on ad to shopping list which pushes the item back to the shopping list and can be permanently removed by clicking on remove option. 
Additional Features in future : Based on the items moved to the basket the application would suggest a few recipes for the meal or vice versa.
