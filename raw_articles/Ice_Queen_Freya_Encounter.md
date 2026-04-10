# Ice Queen Freya — Raid Encounter Guide

Player-facing reference for **Freya’s Castle** (Normal & Hard) on Oasis Salvation. No server implementation details.

---

## Instance basics

- **Party:** 9–100 members (server config), **level 82–85**
- **Summons:** not allowed inside
- **Dungeon time limit:** 120 minutes (instance setting)
- **Re-entry:** scheduled resets (e.g. Wednesday & Saturday — check live server notices)
- **Modes:** **Normal** (instance 139) vs **Hard** (144) — Hard has stricter timers and heavier spawns

There is a **separate solo quest instance** where Freya moves and casts a big blizzard; that is **not** the full raid loop below.

---

## Phase flow (raid)

### Phase 1 — Throne Freya

- Door opens, statues appear, cutscene, **Freya on throne** walks toward **center**.
- **Defeat her HP** to end the phase (scripted transition); she uses a **reduced** combat set (slower, some skills random), **no Reflect Magic / Ice Storm** in this phase.
- **Waves** spawn on a timer into the **central area**: **Archery Knights**, **Archer’s Breath**, sometimes **Glaciers**.
  - **Normal:** wave tick **~30s**
  - **Hard:** wave tick **~50s** but **more** adds per wave

### Intermission

- Freya on throne, **invulnerable**, no combat.
- **~60s** countdown — rebuff, heal, position.

### Phase 2 — Adds + Glakias (no Freya DPS)

- Freya does **not** fight; **waves continue** (Hard: higher volume).
- **Hard only:** **battle timer** (default **360s** from phase start). **Fail = instance collapse** after failure cutscene.
- Statues spawn **Archery Knights** toward the middle. **Kill 10** of these knights (during this phase) to trigger the next scene and **Glakias** (Archery Knight Captain).
- **Kill Glakias** to proceed. At low HP he shouts random rally lines (flavor).

### Phase 3 — Real Freya

- Cutscene, **fighting Freya** spawns, moves to center if not engaged.
- **Full combat AI** + **heaviest** wave tuning.
- **Striders:** attacking her on a **Strider** without her **anti-strider** debuff can trigger a **dismount-style** punish — avoid face-tanking on Strider.

### Phase 4 — Support burn (~20% HP)

- **Cutscene:** Freya **invul**, players **invul** and **blocked**, adds **frozen**.
- **Jinia** + **Kegor** spawn → **Jinia’s Prayer** (huge P./M. Def) + **Kegor’s Courage** (huge atk + atk/cast speed).
- Freya **vulnerable** again; **burn** while buffed.

### Victory

- Kill Freya → waves stop, win cutscene, loot/cleanup.

---

## Freya’s skills (standing boss — Normal / Hard)

AI checks abilities in roughly this **priority** (each has a **cooldown**; Hard is **faster** / **stronger**).

| Skill | What players see |
|--------|------------------|
| **Eternal Blizzard** | Full-room ice damage; screen warning (“strong magic…”). **Hard:** at **four HP thresholds** she may use a **variant** that adds **freeze/paralyze** + **DoT** (Pillar of Frozen / Eternal Ice style) — very dangerous. |
| **Ice Ball** | Ranged ice shot on high-aggro target, **AoE around target** — spread. |
| **Summon Spirits** | Summons; **nearby mobs** can **echo** the summon — add spikes. |
| **Attack Nearby Range** | **AoE around Freya** — melee spacing / brief disengage. |
| **Reflect Magic** | Short **magic reflect** on self — casters hold magic or wait. |
| **Ice Storm** | Hard **single-target** ice nuke in range — spike damage. |
| **Death Clack** | Debuff; on expiry can trigger **Cold Judgement** (AoE follow-up). **Cleanse / immunity** helps. |
| **Rage of Ice** | Self **cast-speed** buff — next stretch is busier. |

**Throne Freya (Phase 1)** uses a **subset**, **slower** timers, and **random** gates on some skills.

---

## Adds

| Add | Notes |
|-----|--------|
| **Archery Knight** | Bodies in the middle; **Phase 2** kills from statue waves **count toward 10** for Glakias. |
| **Archer’s Breath** | Near death may **suicide explode** — treat as **bombs**; range / spread. |
| **Glacier** | Extra control pressure; spawns **randomly** with some waves (~60% chance, 1–3). |
| **Glakias** | Phase 2 **gate boss**; must die to reach Phase 3. |

---

## Safe / recovery zone

The instance defines a **zone** where Freya’s scripted **hate pass** ignores players inside it (recovery / rez positioning). **Room-wide** abilities and **adds** still matter — it is not immunity to everything.

---

## Quick comparison: Normal vs Hard

| Topic | Normal | Hard |
|--------|--------|------|
| Phase 2 timer | None | **360s** fail |
| Wave interval | **30s** | **50s** (but more per tick) |
| Freya combat | Easier tuning | Faster skills, stronger blizzard tier |
| Knights / Glakias | Same roles | Same flow, higher stats |

---

## Player tips (short)

1. Learn **invul phases** so the raid does not waste CDs on scripted immunity.
2. Hard: **Phase 2 is timed** — prioritize **knight kills** and **Glakias**.
3. **Water** resist, **AoE heals**, **cleanses** for Death Clack / Hard blizzard variant.
4. **Watch Reflect Magic**; **no Strider** in her face in Phase 3.
5. At **~20%**, save **big CDs** for post-cutscene **buff window**.

---

*Server reference: Freya Castle Normal/Hard instances and Freya combat scripts.*
