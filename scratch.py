# %%
import numpy as np
import matplotlib.pyplot as plt

# %%
x = np.linspace(0, 2 * np.pi, 500)
y = np.sin(x)

# %%
plt.plot(x, y)
plt.title("Sine wave")
plt.show()
# %%
# %%
print(type(x))
print(x.shape)
print(y.shape)
print(y[:5])
# %%
