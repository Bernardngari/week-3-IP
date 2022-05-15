
function score ()
{
  var marks = 0;
  var quiz1 = document.test.quiz1.value;
  var quiz2 = document.test.quiz2.value;
  var quiz3 = document.test.quiz3.value;
  var quiz4 = document.test.quiz4.value;
  var quiz5 = document.test.quiz5.value;
  var quiz6 = document.test.quiz6.value;
  var quiz7 = document.test.quiz7.value;
  var quiz8 = document.test.quiz8.value;
  var quiz9 = document.test.quiz9.value;
  var quiz10 = document.test.quiz10.value;
  var output=document.getElementById("output")
  if ( quiz1 == "Javascript" )
  {
    marks += 10;
  }
  if ( quiz2 == "Raw data" )
  {
    marks += 10;
  }
  if ( quiz3 == "Assignment operator" )
  {
    marks += 10;
  }
  if ( quiz4 == "Script" )
  {
    marks += 10;
  }
  if ( quiz5 == "False" )
  {
    marks += 10;
  }
  if ( quiz6 == "Dialling a function" )
  {
    marks += 10;
  }
  if ( quiz7 == "Value x" )
  {
    marks += 10;
  }
  if ( quiz8 == "Javascript" )
  {
    marks += 10;
  }
  if ( quiz9 == "Quotes enclosing the value Scania" )
  {
    marks += 10;
  }
  if ( quiz10 == "style" )
  {
    marks += 10;
  };
  output.textContent = marks;

  if (marks<50) {
    remark.textContent = ( "Poor perfomance. Retake test." );
  }
   else if (marks>=50 && marks<=80) {
    remark.textContent = ( "Fairly passed." );
  }
  else 
  {
    remark.textContent=("Excellently passed!") 
   }

}
