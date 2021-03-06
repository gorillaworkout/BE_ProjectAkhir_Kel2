const Router=require('express').Router()
const {PaymentControllers}=require('./../controllers')

Router.get('/getpaymentwaiting',PaymentControllers.GetPaymentInWaiting)
Router.post('/confirmpayment',PaymentControllers.ConfirmPayment)
Router.post('/uploadpayment',PaymentControllers.UploadPayment)
Router.post('/uploadpaymenttransfer',PaymentControllers.UploadPaymentTransfer)
Router.post('/rejectpayment',PaymentControllers.RejectPayment)

module.exports=Router