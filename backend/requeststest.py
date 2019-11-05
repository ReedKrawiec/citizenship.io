import requests

login = {"email":"login1@test.com","password":"login1"}

print(requests.post('http://127.0.0.1:5000/register', json = login).json())
data = requests.post('http://127.0.0.1:5000/login', json = login).json()
print(data)
headers = {"auth-token":data["token"]}
print(headers)
print(requests.post('http://127.0.0.1:5000/logout',json = {}, headers=headers).json())
