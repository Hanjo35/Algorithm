#include <iostream>

using namespace std;

int main() {

	double A, B;
	
	cin >> A >> B;

	cout << fixed;
	cout.precision(9);

	if (A > 0 && B < 10)
		cout << A / B << endl;
		

	return 0;

}