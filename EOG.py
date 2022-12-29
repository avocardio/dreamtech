import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.widgets import MultiCursor
import numpy as np

e1 = pd.read_csv('E1M2.txt', skiprows=6, encoding = 'cp1252').rename(columns = {'Data:': 'Signal'}) 
e2 = pd.read_csv('E2M2.txt', skiprows=6, encoding = 'cp1252').rename(columns = {'Data:': 'Signal'})

E1 = {
    'Signal': e1['Signal'].rolling(100).mean(),
    'Type': 'Vertical',
    'Start Time': '23/12/2022 16:14:17',
    'Sample Rate': 128,
    'Length': 40384,
    'Units': 'µV',
    'Duration (s)': 315,
}

E2 = {
    'Signal': e2['Signal'].rolling(100).mean(),
    'Type': 'Horizontal',
    'Start Time': '23/12/2022 16:14:17',
    'Sample Rate': 128,
    'Length': 40384,
    'Units': 'µV',
    'Duration (s)': 315,
}

def random_epoch(mode = 0):

    if mode == 0:
        # Pick a random 30 second sample from both channels
        start = np.random.randint(0, 40384 - 30 * 128)
        end = start + 30 * 128

        fig = plt.figure(figsize=(12,5), dpi=90)
        gs = fig.add_gridspec(2,hspace=0)
        axs = gs.subplots(sharex=True)

        axs[0].plot(E1['Signal'][start:end])
        axs[0].grid(True)
        axs[1].plot(E2['Signal'][start:end])
        axs[1].grid(True)

        cursor = MultiCursor(fig.canvas,(axs[1],axs[0]),horizOn=False,vertOn=True,color="red",linewidth=1.0)
        plt.xticks(np.arange(start, end, 128), np.arange(1, 31, 1))
        plt.show()

    elif mode == 1:
        # Pick a random 30 second sample from both channels
        start = np.random.randint(0, 40384 - 30 * 128)
        end = start + 30 * 128

        fig = plt.figure(figsize=(11,5))
        gs = fig.add_gridspec(2,hspace=0)
        axs = gs.subplots(sharex=True)

        axs[0].plot(E1['Signal'][start:end], color = 'orange', label = 'Vertical')
        axs[0].plot(E2['Signal'][start:end], color = 'blue', label = 'Horizontal')
        axs[0].legend()
        axs[1].plot(E1['Signal'][start:end] + E2['Signal'][start:end], label = 'Vertical + Horizontal')
        axs[1].axhline(y=100, color="black")
        axs[1].axhline(y=-100, color="black")
        axs[1].legend()

        cursor = MultiCursor(fig.canvas,(axs[1],axs[0]),horizOn=False,vertOn=True,color="red",linewidth=1.0)
        plt.xticks(np.arange(start, end, 128), np.arange(1, 31, 1))
        plt.show()

random_epoch(1)