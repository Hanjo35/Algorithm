#include <stdio.h>

int main(){

	int num=0;
	scanf("%d", &num);

	if(num >= 90)
		printf("A\n");
	
	else if(num >= 80)
		printf("B\n");
	
	else if(num >= 70) 
		printf("C\n");

	else if(num >= 60) 
		printf("D\n");
	
	else
		printf("F\n");
	

	return 0;

}