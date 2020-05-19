/* splitting(); */
//Load in character data
/* d3.json("https://gist.githubusercontent.com/andybarefoot/9174d60b5c468fba380d9f6f2a3ca1ec/raw/559482530cf419d5cd3b1d73f1927ca4cd51a4ba/griditems.json", function(data) */ {
  grid = d3.select("body")
    .append("div")
    .attr("id", "grid")
    .attr("class", "grid")
  ;
  griditems = grid
    .selectAll("div")
    .data(data.griditems)
    .enter()
    .append("div")
    .attr("class", "griditem")
    .style("background-color", function(d){
      return d.colourHex;
    })
  ;
  griditems.filter(function(d){ return d.size == 1; }).classed("size1", true);
  griditems.filter(function(d){ return d.size == 2; }).classed("size2", true);
  griditems.filter(function(d){ return d.size == 3; }).classed("size3", true);
  griditems.filter(function(d){ return d.size == 4; }).classed("size4", true);
  griditems.filter(function(d){ return d.size == 5; }).classed("size5", true);
  griditems.filter(function(d){ return d.size == 6; }).classed("size6", true);
  griditems.filter(function(d){ return d.size == 7; }).classed("size7", true);
   griditems 
    .append("h2")
    .text(function(d,i){
      return d.category;
    })
  ;
   griditems 
    .append("p")
    .text(function(d,i){
      return "String: " +d.string;
    })
  ;
  
  d3
    .select("#orderColour")
    .on("click", function (){
      griditems.sort(function(a, b) {
        return a["colourID"] - b["colourID"];
      });
    })
  ;

  d3
    .select("#orderCategory")
    .on("click", function (){
      griditems.sort(function(a, b) { 
        return d3.ascending(a["category"], b["category"]);
      })
    ;
    })
  ;

  d3
    .select("#orderString")
    .on("click", function (){
      griditems.sort(function(a, b) { 
        return d3.ascending(a["string"], b["string"]);
      })
    ;
    })
  ;

  d3
    .select("#orderSize")
    .on("click", function (){
      griditems.sort(function(a, b) {
        return b["size"] - a["size"];
      })
    ;
    })
  ;

})