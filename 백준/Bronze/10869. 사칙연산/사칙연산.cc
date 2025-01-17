#include <iostream>

using namespace std;

int main() {

	int A, B;
	
	cin >> A >> B;


	if (A >= 1 && B <= 10000)
		cout << A + B << endl;
		cout << A - B << endl;
		cout << A * B << endl;
		cout << A / B << endl;
		cout << A % B << endl;
		
	return 0;

}