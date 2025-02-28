import React from 'react'

const TransferForm = () => {

    const dispatch = useDispatch();
    const {wallet} = useSelector(store => store);

    const [formData, setFormData] = React.useState({
        amount: '',
        walletId: '',
        purpose: '',
    })
    
    
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value  });
    }
    
    const handleSubmit = () => {
        dispatch(transferMoney({
            jwt:locationStorage.getItem('jwt'),
            walletId: formData.walletId,
            reqData: {
                amount: formData.amount,
                purpose: formData.purpose,
            }
        }))
        console.log(formData);
    }
    
  return (
    <div className = 'pt-10 space-y-5'>
        <div>
            <h1 className = 'pb-1'>Enter Amount</h1>
            <Input name = "amount" onChange = {handleChange} value = {FormData.amount}
            className = "py-7" placeholder = "$9999"/> 
        </div>
    
        <div>
            <h1 className = 'pb-1'>Wallet Id</h1>
            <Input name = "walletId" onChange = {handleChange} value = {formData.walletId}
            className = "py-7" placeholder = "#ADER455"/> 
        </div>

        <div>
            <h1 className = 'pb-1'>Purpose</h1>
            <Input name = "purpose" onChange = {handleChange} value = {formData.purpose}
            className = "py-7" placeholder = "gift for your friend..."/> 
        </div>
        
        <DialogClose className = "w-full">
            <Button onClick = {handleSubmit} className = "w-full py-7">
                Submit
            </Button>
        </DialogClose>
    </div>
  )
}

export default TransferForm