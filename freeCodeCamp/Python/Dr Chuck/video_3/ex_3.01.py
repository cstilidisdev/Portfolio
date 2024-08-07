# Calculates if overtime then it charge the over time hours by 0.5 * hour rate,
# otherwise it is regular
sh = input("Enter hours: ")
sr = input("Enter Rate: ")
fh = float(sh)
fr = float(sr)
# print(fh, fr)
if fh > 40:
    # print("Overtime")
    reg = fr * fh
    otp = (fh - 40.0) * (fr * 0.5)
    # print(reg, otp)
    xp = reg + otp
else:
    # print("Regular")
    xp = fh * fr
print("Pay: ", xp)
