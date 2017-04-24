/*XAY DUNG BIEU DO TAN SUAT*/

	int freq[10] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };// TAO MANG TINH TAN SO 
	double FREQ[10] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };//TAO MANG TINH TAN SUAT
	double V_width = (V_max - V_min) / 10;
	
	// TAO MANG CHIA THANH 10 KHOANG GIA TRI ei
	double value_e[10];
	value_e[0] = V_min;
	for (int j = 1; j <= 10; j++)
		value_e[j] = value_e[j - 1] + V_width;

	//TINH TAN SO
	for (int j = (K - 1)*(M / K); j <= (K*(M / K) - 1 + M % K); j++)
	{
		if (abs(e[j] - V_min) < EPSILON)
			freq[0]++;
		else if (abs(e[j] - V_max) < EPSILON)
			freq[9]++;
		else
		{
			for (int z = 0; z < 10; z++)
			{
				if ((e[j] > value_e[z] || abs(e[j] - value_e[z]) < EPSILON) && e[j] < value_e[z + 1])
					freq[z]++;
			}
		}
	}
		
	int N = 0; //TINH TONG TAN SO
	for (int j = 0; j < 10; j++)
		N += freq[j];

	for (int j = 0; j < 10; j++)
		FREQ[j] = freq[j] / (double)N;
