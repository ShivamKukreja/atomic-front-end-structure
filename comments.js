{
  "Version": "2012-10-17",
  "Statement": [
      {
          "Sid": "PublicReadGetObject",
          "Effect": "Allow",
          "Principal": {
              "AWS": "arn:aws:iam::123456789012:user/Administrator"
          },
          "Action": "s3:GetObject",
          "Resource": "arn:aws:s3:::demo-test-react-app-11/*"
      }
  ]
}


Order Api Lambda Details: Shivam Kukreja, Aditya Anant



curl -d '{"OrderStatus" : "Pending", "UserId" : "0f8fad5b-d9cb-469f-a165-70867728950e", "UserMobileNumber" : "9874546454", "CreationDate" : "2020-11-01T00:00:00", "DeliveryAddressId" : 1, "PaymentMethod" : "COD"}'  -H "Content-Type: application/json" -X POST https://z3j8sj36q7.execute-api.us-east-2.amazonaws.com/Prod/api/Orders


Base Address : https://z3j8sj36q7.execute-api.us-east-2.amazonaws.com/Prod



Api Endpoints:
1. Add Order: /api/Orders (POST Method)
Request:
{
    "OrderStatus" : "Pending",
    "UserId" : "0f8fad5b-d9cb-469f-a165-70867728950e",
    "UserMobileNumber" : "9874546454",
    "CreationDate" : "2020-11-01T00:00:00",
    "DeliveryAddressId" : 1,
    "PaymentMethod" : "COD"
}



Note: For the time being let the Address Id be hardcoded in the request



2. Get Order By User Id: /api/Orders/getbyid (GET method)



curl -X GET https://z3j8sj36q7.execute-api.us-east-2.amazonaws.com/Prod/api/Orders/getbyid
