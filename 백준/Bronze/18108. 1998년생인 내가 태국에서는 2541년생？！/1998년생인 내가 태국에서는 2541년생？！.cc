#include <iostream>

using namespace std;

int main() {

	int y;
	
	cin >> y;

	if (1000 <= y <= 3000)
		y -= 543;

	cout << y;

	return 0;

}