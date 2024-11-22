# benevol2024-demo

Demonstration of Aran for Benevol2024

```sh
npm install
ANALYSIS=./shadow.mjs node --import ./setup.mjs ./age.mjs 1989
```

```
&1[&2:Number] <- &3[&4:](&5["Number"])
&6[3] <- &7[&8:aran.get](&9[&10], &11["length"])
&12[2] <- &13[&14:aran.binary](&15["-"], &6[3], &16[1])
&17["1989"] <- &18[&8:aran.get](&19[&10], &12[2])
&20[1989] <- &1[&2:Number](&17["1989"])
&21[35] <- &22[&14:aran.binary](&23["-"], &24[2024], &20[1989])
&25[12775] <- &26[&14:aran.binary](&27["*"], &28[365], &21[35])
&29[&30] <- &31[&4:](&32["console"])
&33[&34:log] <- &35[&8:aran.get](&29[&30], &36["log"])
&37["You are 12775 days old."] <- &38[&39:concat](&40["You are "], &25[12775], &41[" days old."])
You are 12775 days old.
&42[undefined] <- &33[&34:log](&37["You are 12775 days old."])
```