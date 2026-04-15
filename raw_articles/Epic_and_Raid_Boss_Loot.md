# Epic and raid boss loot (command channels and contested kills)

This page explains how loot works when multiple groups fight the same raid or epic boss—especially when two **command channels** (multiple parties working together) are involved. It focuses on **who earns the drop**, **who can pick items up from the ground**, and **when** those rules change.

---

## Which side gets the boss loot?

When the boss dies, the server compares **total damage** contributed by each **group**:

- If you are in a **command channel**, every party in that channel counts as **one combined group**. All damage from everyone in that command channel is added together.
- If you are only in a **party** (no command channel), your party is the group.
- If you are **solo**, you are your own group.

The group with the **highest total damage** is treated as the side that **wins loot rights** for that kill. The other side does not get credit for that boss’s roll in the same way the winning group does.

---

## Who is the “credited” player for the drop?

The server picks **one character** to attach certain raid behaviours to (for example, timed pickup protection on items that appear on the ground). In practice:

- If the **last hit** (killing blow) comes from someone on the **winning** group, that **killer** is usually the credited player.
- If the killing blow comes from someone **outside** the winning group (for example a steal or mixed situation), the credited player may instead be the **leader of the winning command channel**, or the **party leader** if the winning side was a single party.

So **being the command channel leader does not, by itself, make you the credited player** for ground pickup rules. Often it is whoever landed the kill on the winning side.

---

## Picking up items on the ground (raid protection timer)

For many raid and epic drops, items appear on the ground instead of going straight to a character’s inventory (this also depends on server settings such as auto-loot for raids).

### First 300 seconds after the item appears

The server uses a **300 second** (5 minute) **raid drop protection** window. During this entire window:

- The **credited player** can pick the item up.
- Anyone in the **same party** as the credited player (the exact same 3‑ to 9‑man party) can also pick the item up.

**Important:** Other parties in the **same command channel** are **not** treated the same as the credited player’s party during these 300 seconds. Only the **one party** that contains the credited player may pick up early.

That is why **command channel leaders** (or shot-callers) often report that pickup was **declined** or **failed**: they are frequently the leader of a **different party** inside the channel than the player who got credit for the drop (for example the killer’s party). Until the timer finishes, they are blocked the same way an outsider would be, **relative to that party-only early pickup rule**.

### After 300 seconds

When those 300 seconds have passed, that **raid pickup protection** no longer blocks pickup. What happens next depends on whether the item is still on the ground, who is nearby, and other server rules; the timed “only this party may pick up first” rule is over.

**Note:** Raid drop protection is set to **300 seconds** in the current server configuration.

---

## Party loot mode (after someone allowed to pick up does so)

When a character who **is** allowed to pick up takes the item while in a party, normal **party loot settings** apply (finders keepers, random, turn order, and so on). Those settings apply **within that party**, not across the whole command channel. Dividing loot between parties in a channel is still something players coordinate (roll, trade, etc.).

---

## Quick reference

| Topic | Rule (default) |
|--------|----------------|
| Who wins loot between two command channels? | The command channel (as a whole) with **more total damage** on the boss. |
| Who can pick up during the first **300 seconds**? | The **credited player** and **only their party**, not other parties in the same channel. |
| Why can’t our CC leader pick up? | Often they are **not in the same party** as the credited player (e.g. the killer). |
| When does the strict pickup rule end? | After **300 seconds**. |

---

## What this means in a fight

1. **Coordinate parties:** If you need the leader or a specific party to loot first, the **credited player** for the kill should be in the **same party** as whoever must grab the drop—or everyone waits **300 seconds** after the drop appears.
2. **Don’t assume “CC leader = can loot first.”** Credit follows the rules above, and early pickup follows **party**, not **channel**.
3. **Contested bosses:** Winning is damage **per side** (whole CC vs whole CC). Pickup right after the kill is **per party** inside the winning side for **300 seconds**.

If behavior differs from this guide, report the boss name, time, and parties involved so administration can review the event settings and logs.
