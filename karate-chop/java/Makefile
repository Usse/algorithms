
compile:
	javac KarateChop.java
run:
	java KarateChop
compiletest:
	javac -cp .:junit-4.12.jar Tests.java
runtest:
	java -cp .:junit-4.12.jar:hamcrest-core-1.3.jar org.junit.runner.JUnitCore Tests
clean:
	rm -f *.class
r:
	clear && make compile && make run
t:
	clear && make compiletest && make runtest
