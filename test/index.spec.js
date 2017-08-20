describe('hello test',() => {
	it("this is test",() => {

	});
	it("this is example",() => {
		expect('hi').to.equal('hi');
	});
	it("chai test 3",() => {
		throw new Errorw("测试失败");
	});

})