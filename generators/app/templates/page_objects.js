pages = {
	// Library will dynamically require page objects here
  

	
	
	pageFactory: function(page) {
    if(_.isUndefined(pageObjs[page.name])) {
      console.log(page.name + ' is Undefined');
      pageObjs[page.name] = new page();
    } else {
      console.log(page.name + ' is Defined');
    }
    return pageObjs[page.name];
  }
}

var pageObjs = {};