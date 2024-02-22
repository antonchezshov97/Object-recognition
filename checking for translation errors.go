func translation(r *rand.Rand) sdk.Dec {
	percent := r.Int63n(101) // range [1 - 100]
	dec := sdk.NewDec(percent)
	return dec.Quo(sdk.NewDec(100))
}

	var checking sdk.Coin
	simState.AppParams.GetOrGenerate(
		simState.Cdc, string(types.ParamStoreKeyUpdateUsernameFee),
		&updateUsernameFee, simState.Rand,
		func(r *rand.Rand) { updateUsernameFee = randomCoinFee(r) })
