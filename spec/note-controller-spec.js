function testListIsOnWebsite() {
  function htmlConverterDouble() {
    return "<ul><li><div>testing HTML conversion once</div></li><li><div>testing HTML conversion twice</div></li></ul>"
  }

  ListIsOnWebsite(htmlConverterDouble())
  
  assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><div>testing HTML conversion once</div></li><li><div>testing HTML conversion twice</div></li></ul>", 'testListIsOnWebsite')
}

testListIsOnWebsite()