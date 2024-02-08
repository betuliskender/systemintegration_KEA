txt = "My name is Betül"

x = txt.encode()

print(x)

y = x.decode()

print(y)


encoded_string = "hallå".encode()

print(encoded_string)
print(type(encoded_string))

decoded_string = encoded_string.decode()

print(decoded_string)