const apiUrl = 'https://game.hellopixel.network/PixelWars/api/';

// Функции для работы с игроками
async function getPlayers() {
    const response = await fetch(`${apiUrl}players`);
    return response.json();
}
async function createPlayer(playerData) {
    const response = await fetch(`${apiUrl}players`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerData),
    });
    return response.json();
}

async function getPlayer(telegramId) {
    const response = await fetch(`${apiUrl}players/${telegramId}`);
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Player not found');
    }
}

async function updatePlayer(telegramId, playerData, hash) {
	const response = await fetch(`${apiUrl}players/${telegramId}/${hash}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerData),
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Player not found');
    }
}

async function deletePlayer(telegramId) {
    const response = await fetch(`${apiUrl}players/${telegramId}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        return 'Player deleted';
    } else {
        throw new Error('Player not found');
    }
}

// Функции для работы с MobOpen
async function getMobOpen() {
    const response = await fetch(`${apiUrl}mobopen`);
    return response.json();
}

async function createMobOpen(mobData) {
    const response = await fetch(`${apiUrl}mobopen`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(mobData),
    });
    return response.json();
}

async function getMobOpenByPlayerId(playerId) {
    const response = await fetch(`${apiUrl}mobopen/${playerId}`);
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('MobOpen not found');
    }
}

async function updateMobOpen(id, mobData) {
    const response = await fetch(`${apiUrl}mobopen/${playerId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(mobData),
    });
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('MobOpen not found');
    }
}

async function deleteMobOpen(playerId) {
    const response = await fetch(`${apiUrl}mobopen/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        return 'MobOpen deleted';
    } else {
        throw new Error('MobOpen not found');
    }
}

// Функции для работы с Perks
async function getPerks() {
    const response = await fetch(`${apiUrl}perks`);
    return response.json();
}

async function createPerk(perkData) {
    const response = await fetch(`${apiUrl}perks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(perkData),
    });
    return response.json();
}

async function getPerkByPlayerId(playerId) {
    const response = await fetch(`${apiUrl}perks/${playerId}`);
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Perk not found');
    }
}

async function updatePerk(id, perkData) {
    const response = await fetch(`${apiUrl}perks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(perkData),
    });
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Perk not found');
    }
}

async function deletePerk(id) {
    const response = await fetch(`${apiUrl}perks/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        return 'Perk deleted';
    } else {
        throw new Error('Perk not found');
    }
}

// Функции для работы с Skills
async function getSkills() {
    const response = await fetch(`${apiUrl}skills`);
    return response.json();
}

async function createSkill(skillData) {
    const response = await fetch(`${apiUrl}skills`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(skillData),
    });
    return response.json();
}

async function getSkillByPlayerId(playerId) {
    const response = await fetch(`${apiUrl}skills/${playerId}`);
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Skill not found');
    }
}

async function updateSkill(id, skillData) {
    const response = await fetch(`${apiUrl}skills/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(skillData),
    });
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Skill not found');
    }
}

async function deleteSkill(id) {
    const response = await fetch(`${apiUrl}skills/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        return 'Skill deleted';
    } else {
        throw new Error('Skill not found');
    }
}

// Функции для работы с Donat
async function getDonat() {
    const response = await fetch(`${apiUrl}donat`);
    return response.json();
}

async function createDonat(donatData) {
    const response = await fetch(`${apiUrl}donat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(donatData),
    });
    return response.json();
}

async function getDonatByPlayerId(playerId) {
    const response = await fetch(`${apiUrl}donat/${playerId}`);
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Donat not found');
    }
}

async function updateDonat(playerId, donatData) {
    const response = await fetch(`${apiUrl}donat/${playerId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(donatData),
    });
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Donat not found');
    }
}

async function deleteDonat(playerId) {
    const response = await fetch(`${apiUrl}donat/${playerId}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        return 'Donat deleted';
    } else {
        throw new Error('Donat not found');
    }
}

// Функции для работы со Stats
async function getStats() {
    const response = await fetch(`${apiUrl}stats`);
    return response.json();
}

async function createStat(statData) {
    const response = await fetch(`${apiUrl}stats`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(statData),
    });
    return response.json();
}

async function getStatByPlayerId(playerId) {
    const response = await fetch(`${apiUrl}stats/${playerId}`);
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Stat not found');
    }
}

async function updateStat(playerId, statData) {
    const response = await fetch(`${apiUrl}stats/${playerId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(statData),
    });
    if (response.ok) {
        return response.json();
    } else {
		
		const updatedStatData = { ...statData, "player_id":playerId };
        createStat(updatedStatData);
        // throw new Error('Stat not found');
    }
}

async function deleteStat(playerId) {
    const response = await fetch(`${apiUrl}stats/${playerId}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        return 'Stat deleted';
    } else {
        throw new Error('Stat not found');
    }
}

// Функции для работы с Achievements
async function getAchievements() {
    const response = await fetch(`${apiUrl}achievements`);
    return response.json();
}

async function createAchievement(achievementData) {
    const response = await fetch(`${apiUrl}achievements`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(achievementData),
    });
    return response.json();
}

async function getAchievementByPlayerId(playerId) {
    const response = await fetch(`${apiUrl}achievements/${playerId}`);
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Achievement not found');
    }
}

async function updateAchievement(playerId, achievementData) {
    const response = await fetch(`${apiUrl}achievements/${playerId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(achievementData),
    });
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Achievement not found');
    }
}

async function deleteAchievement(playerId) {
    const response = await fetch(`${apiUrl}achievements/${playerId}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        return 'Achievement deleted';
    } else {
        throw new Error('Achievement not found');
    }
}

// Функция для получения данных игрока
async function getPlayerData(playerId) {
    const response = await fetch(`${apiUrl}players/${playerId}`);
    if (!response.ok) return false;
    return response.json();
}

// Функция для получения открытых мобов
async function getMobOpen(playerId) {
    const response = await fetch(`${apiUrl}mobopen/${playerId}`);
    if (!response.ok) throw new Error('Failed to fetch mob open data');
    return response.json();
}

// Функция для получения перков
async function getPerks(playerId) {
    const response = await fetch(`${apiUrl}perks/${playerId}`);
    if (!response.ok) throw new Error('Failed to fetch perks data');
    return response.json();
}

// Функция для получения навыков
async function getSkills(playerId) {
    const response = await fetch(`${apiUrl}skills/${playerId}`);
    if (!response.ok) throw new Error('Failed to fetch skills data');
    return response.json();
}

// Функция для получения доната
async function getDonat(playerId) {
    const response = await fetch(`${apiUrl}donat/${playerId}`);
    if (!response.ok) throw new Error('Failed to fetch donat data');
    return response.json();
}

// Функция для получения статистики
async function getStats(playerId) {
    const response = await fetch(`${apiUrl}stats/${playerId}`);
    if (!response.ok) throw new Error('Failed to fetch stats data');
    return response.json();
}

// Функция для получения достижений
async function getAchievements(playerId) {
    const response = await fetch(`${apiUrl}achievements/${playerId}`);
    if (!response.ok) throw new Error('Failed to fetch achievements data');
    return response.json();
}

// Основная функция для получения всех данных
async function loadGameData(playerId) {
    try {
        const playerData = await getPlayerData(playerId);
		if (!playerData) {
			const newPlayerData = {
				telegram_id: playerId,
				xp: 0,
				xp_max: 100,
				level: 1,
				wat: 0,
				deads: 0,
				kills_total: 0,
				kills_bosses: 0,
				total_energy: 0,
				total_energy: 0,
			};
			await createPlayer(newPlayerData);
			console.log("Новый игрок создан:", newPlayerData);
		}else if (playerData.wipe){
			GMS_API.send_async_event_social({"target":"wipe"})
			telegramId = getTelegramId()
			const response = await fetch(`${apiUrl}players/${telegramId}/wipe`,);
		}

		const mobOpenData = await getMobOpen(playerId);
		const perksData = [];
		const skillsData = [];
		const donatData = [];
		// const perksData = await getPerks(playerId);
		// const skillsData = await getSkills(playerId);
		// const donatData = await getDonat(playerId);

		let statsData = [];
		try {
			statsData = await getStats(playerId);
		} catch {
			statsData = [];
		}

		const achievementsData = [{}];
		let mobOpen = []; // Declare mobOpen outside of the if-else blocks

		// Проверка, является ли mobOpenData массивом и содержит ли он более одного элемента
		if (Array.isArray(mobOpenData)) {
			// Если это массив и в нем больше одного элемента
			mobOpen = mobOpenData.map(mob => mob.mob_id);
		} else if (mobOpenData) {
			// Если это массив, но в нем только один элемент
			mobOpen = [mobOpenData.mob_id]; // Обернуть в массив
		}

		// Создаем объект с данными
		const data = {
			xp: playerData.xp || 0,
			xpMax: playerData.xp_max || 100,
			level: playerData.level || 1,
			wat: playerData.wat || 0,
			deads: playerData.deads || 0,
			killsTotal: playerData.kills_total || 0,
			killsBosses: playerData.kills_bosses || 0,
			total_energy: playerData.energy + playerData.star_energy + playerData.pxl_energy || 0,
			inGame: playerData.inGame || false,
			mobOpen: mobOpen,
			perks: perksData.map(perk => ({
				id: perk.perk_id,
				value: perk.value,
			})),
			skills: skillsData.map(skill => skill.skill_id),
			donat: {
				chip_head: donatData.chip_head || 0,
				chip_body: donatData.chip_body || 0,
				armor_head: donatData.armor_head || 0,
				armor_body: donatData.armor_body || 0,
				armor_legs: donatData.armor_legs || 0,
				boots: donatData.boots || 0,
				device: donatData.device || 0,
				weapon: donatData.weapon || 0,
			},
			stats: {
				kills: statsData.kills || 0,
				bossKills: statsData.boss_kills || 0,
				knifeKills: statsData.knife_kills || 0,
				axeKills: statsData.axe_kills || 0,
				swordKills: statsData.sword_kills || 0,
				lswordKills: statsData.lsword_kills || 0,
				pistolKills: statsData.pistol_kills || 0,
				shotgunKills: statsData.shotgun_kills || 0,
				rifleKills: statsData.rifle_kills || 0,
				lpistolKills: statsData.lpistol_kills || 0,
				lrifleKills: statsData.lrifle_kills || 0,
			},
			achievements: achievementsData.map(achievement => ({
				id: achievement.achievement_id,
				isTaken: achievement.is_taken,
				lastAchievement: achievement.last_achievement,
			})),
		};


	// Преобразование data в соответствии с global.player_data
	const transformedData = {
		"target": "loading",
		name: "", // Имя игрока, можно оставить пустым
		xp: data.xp,
		xp_max: data.xpMax,
		level: data.level,
		wat: data.wat,
		deads: data.deads,
		inGame: data.inGame,
		kills_total: data.killsTotal,
		total_energy: data.total_energy,
		kills_bosses: data.killsBosses,
		mob_open: new Array(30).fill(0), // Создаем массив из 30 элементов, заполненный нулями
		perks: new Array(17).fill(0), // Создаем массив из 17 элементов, заполненный нулями
		skills: new Array(4).fill(0), // Создаем массив из 4 элементов, заполненный нулями
		donat: {
			chip_head: data.donat.chip_head,
			chip_body: data.donat.chip_body,
			armor_head: data.donat.armor_head,
			armor_body: data.donat.armor_body,
			armor_legs: data.donat.armor_legs,
			boots: data.donat.boots,
			device: data.donat.device,
			weapon: data.donat.weapon
		},
		stats: {
			kills: data.stats.kills,
			bossKills: data.stats.bossKills,
			knifeKills: data.stats.knifeKills,
			axeKills: data.stats.axeKills,
			swordKills: data.stats.swordKills,
			lswordKills: data.stats.lswordKills,
			pistolKills: data.stats.pistolKills,
			shotgunKills: data.stats.shotgunKills,
			rifleKills: data.stats.rifleKills,
			lpistolKills: data.stats.lpistolKills,
			lrifleKills: data.stats.lrifleKills
		},
		achievements: new Array(99).fill(0), // Создаем массив из 99 элементов, заполненный нулями
		achievements_taken: new Array(99).fill(0), // Создаем массив из 99 элементов, заполненный нулями
		last_achievement: 0 // Последнее достижение
	};

	// Заполнение массивов perks и skills из data
	data.perks.forEach((perk, index) => {
		if (perk.id < 17) {
			transformedData.perks[perk.id] = perk.value; // Заполняем массив perks
		}
	});

	data.skills.forEach((skill, index) => {
		if (index < 4) {
			transformedData.skills[index] = {id: skill.id,value: skill.value}; // Заполняем массив skills
		}
	});

	// Заполнение mob_open
	data.mobOpen.forEach((mobId, index) => {
		if (index < 30) {
			transformedData.mob_open[index] = mobId; // Заполняем массив mob_open
		}
	});

	// Заполнение achievements
	data.achievements.forEach((achievement, index) => {
		if (index < 99) {
			transformedData.achievements[index] = achievement.isTaken ? 1 : 0; // 1 если взято, иначе 0
		}
	});

	// Заполнение achievements_taken
	data.achievements.forEach((achievement, index) => {
		if (index < 99) {
			transformedData.achievements_taken[index] = achievement.isTaken ? 1 : 0; // 1 если взято, иначе 0
		}
	});

	// Теперь transformedData содержит данные в нужном формате

		GMS_API.send_async_event_social(transformedData);
    } catch (error) {
        console.error(error.message);
		GMS_API.send_async_event_social(null)
    }
}

function changeInGame(inGame){
	window.in_game = inGame;
}

async function updatePlayerData(playerId, newData, hash) {
        // Получаем текущие данные игрока
		let currentPlayerData = {};
		let currentMobOpenData = {};
		let currentPerksData = {};
		let currentSkillsData = {};
		let currentDonatData = {};
		let currentStatsData = {};
		let currentAchievementsData = {};
		newData = JSON.parse(newData);
		currentPlayerData = await getPlayerData(playerId);
		if (currentPlayerData.wipe){
			refresh()
		}

		try {
			currentMobOpenData = await getMobOpenByPlayerId(playerId);
		} catch (error) {
			console.error("Ошибка при получении открытых мобов:", error);
			currentMobOpenData = {}; // Пустой словарь в случае ошибки
		}
		// try {
			// currentPerksData = await getPerkByPlayerId(playerId);
		// } catch (error) {
			// console.error("Ошибка при получении перков:", error);
			// currentPerksData = {}; // Пустой словарь в случае ошибки
		// }

		// try {
			// currentSkillsData = await getSkillByPlayerId(playerId);
		// } catch (error) {
			// console.error("Ошибка при получении навыков:", error);
			// currentSkillsData = {}; // Пустой словарь в случае ошибки
		// }

		// try {
			// currentDonatData = await getDonatByPlayerId(playerId);
		// } catch (error) {
			// console.error("Ошибка при получении доната:", error);
			// currentDonatData = {}; // Пустой словарь в случае ошибки
		// }

		// try {
			// currentStatsData = await getStatByPlayerId(playerId);
		// } catch (error) {
			// console.error("Ошибка при получении статистики:", error);
			// currentStatsData = {}; // Пустой словарь в случае ошибки
		// }

		// try {
			// currentAchievementsData = await getAchievementByPlayerId(playerId);
		// } catch (error) {
			// console.error("Ошибка при получении достижений:", error);
			// currentAchievementsData = {}; // Пустой словарь в случае ошибки
		// }
		// newData.mob_open = JSON.parse(newData.mob_open);
		// newData.perks = JSON.parse(newData.perks);
		// newData.skills = JSON.parse(newData.skills);
		// newData.donat = JSON.parse(newData.donat);
		newData.stats = JSON.parse(newData.stats);
		// newData.achievements = JSON.parse(newData.achievements);
        // Обновление данных игрока
		if (currentPlayerData.inGame !== newData.inGame) {
			hash = await updatePlayer(playerId, { inGame: newData.inGame }, hash);
			console.log("InGame updated", playerId, { inGame: newData.inGame })
        }
		if (currentPlayerData.xp !== newData.xp) {
            hash = await updatePlayer(playerId, { xp: newData.xp}, hash);
			console.log("Player xp updated",playerId, { xp: newData.xp })
        }
        if (currentPlayerData.xp_max !== newData.xp_max) {
            hash = await updatePlayer(playerId, { xp_max: newData.xp_max }, hash);
			console.log("Player xp_max updated", playerId, { xp_max: newData.xp_max } )
        }
        if (currentPlayerData.level !== newData.level) {
            hash = await updatePlayer(playerId, { level: newData.level }, hash);
			console.log("Player level updated", playerId, { level: newData.level })
        }
        if (currentPlayerData.wat !== newData.wat) {
            hash = await updatePlayer(playerId, { wat: newData.wat }, hash);
			console.log("Player wat updated")
        }
        if (currentPlayerData.deads !== newData.deads) {
            hash = await updatePlayer(playerId, { deads: newData.deads }, hash);
			console.log("Player deads updated", newData.deads)
        }
        if (currentPlayerData.kills_total !== newData.kills_total) {
            hash = await updatePlayer(playerId, { kills_total: newData.kills_total }, hash);
			console.log("Player kills_total updated")
        }
        if (currentPlayerData.kills_bosses !== newData.kills_bosses) {
            hash = await updatePlayer(playerId, { kills_bosses: newData.kills_bosses }, hash);
			console.log("Player kills_bosses updated")
        }
		if (currentPlayerData.waves < newData.waves) {
            hash = await updatePlayer(playerId, { waves: newData.waves }, hash);
			console.log("Player waves updated")
        }
        // // Обновление mob_open
		newData.MobOpen = JSON.parse(newData.MobOpen);
        for (let i = 0; i < newData.MobOpen.length; i += 1) {
			if (newData.MobOpen[i] === 1) {
				// Преобразуем объект в массив значений и ищем нужный моб
				const currentMob = Object.values(currentMobOpenData).find(m => m.mob_id === i);
				
				if (!currentMob) {
					// Если моб не найден, создаем новый
					await createMobOpen({ player_id: playerId, mob_id: i, is_open: true });
				} else if (!currentMob.is_open) {
					// Если моб найден, но не открыт, обновляем его
					await updateMobOpen(currentMob.id, { is_open: true });
				}
			}
		}

        // // Обновление perks
        // for (const perk of newData.perks) {
            // const currentPerk = currentPerksData.find(p => p.perk_id === perk.id);
            // if (!currentPerk) {
                // // Если перк не найден, создаем новый
                // await createPerk({ player_id: playerId, perk_id: perk.id, value: perk.value });
            // } else if (currentPerk.value !== perk.value) {
                // // Если перк найден, но значение изменилось, обновляем его
                // await updatePerk(currentPerk.id, { value: perk.value });
            // }
        // }

        // // Обновление skills
        // for (const skill of newData.skills) {
            // const currentSkill = currentSkillsData.find(s => s.skill_id === skill.id);
            // if (!currentSkill) {
                // // Если навык не найден, создаем новый
                // await createSkill({ player_id: playerId, skill_id: skill.id, value: skill.value });
            // } else if (currentSkill.value !== skill.value) {
                // // Если навык найден, но значение изменилось, обновляем его
                // await updateSkill(currentSkill.id, { value: skill.value });
            // }
        // }

        // // Обновление доната
        // if (JSON.stringify(currentDonatData) !== JSON.stringify(newData.donat)) {
            // await updateDonat(playerId, newData.donat);
        // }

        // Обновление статистики
		console.log(newData.stats)
        if (JSON.stringify(currentStatsData) !== JSON.stringify(newData.stats)) {
            await updateStat(playerId, newData.stats);
        }

        // // Обновление достижений
        // for (const achievement of newData.achievements) {
            // const currentAchievement = currentAchievementsData.find(a => a.achievement_id === achievement.id);
            // if (!currentAchievement) {
                // // Если достижение не найдено, создаем новое
                // await createAchievement({ player_id: playerId, achievement_id: achievement.id, is_taken: achievement.is_taken, last_achievement: achievement.last_achievement });
            // } else if (currentAchievement.is_taken !== achievement.is_taken || currentAchievement.last_achievement !== achievement.last_achievement) {
                // // Если достижение найдено, но данные изменились, обновляем его
                // await updateAchievement(currentAchievement.id, { is_taken: achievement.is_taken, last_achievement: achievement.last_achievement });
            // }
        // }

		GMS_API.send_async_event_social({"target":"hash", "hash":hash});
        console.log('Данные игрока успешно обновлены.');

}

function refresh(){
	location.reload()
}

function getTelegramId(){
	try{
		return Telegram.WebApp.initDataUnsafe.user.id;
	}catch (error){
		return 769153884;
        console.log('Ошибка при получении telegram id.');
	}
}


async function fetchAndSortPlayers() {
  
        const players = await getPlayers();
		const currentPlayerId = getTelegramId(); // Получаем ID текущего игрока
		const currentPlayer = await getPlayer(currentPlayerId); // Получаем данные текущего игрока

		// Создаем новый массив, который включает текущего игрока
		const allPlayers = players;

		// Сортировка всех игроков по убыванию волн, затем по количеству убитых боссов
		allPlayers.sort((a, b) => {
			if (b.waves === a.waves) {
				if (b.kills_bosses === a.kills_bosses){
					return b.kills_total - a.kills_total
				} 
				return b.kills_bosses - a.kills_bosses
			}
			return b.waves - a.waves; // Сортируем по волнам
		});

		// Находим текущее место игрока в отсортированном массиве
		console.log(allPlayers)
		const currentPlayerIndex = allPlayers.findIndex(player => player.wallet_adress === currentPlayer.wallet_adress);
		const currentPlayerRank = currentPlayerIndex + 1; // Место в топе (индекс + 1)

		// Создаем новый массив для отсортированных игроков
		const sortedPlayers = [];

		// Добавляем текущего игрока на нулевой индекс с его местом в топе
		sortedPlayers.push({
			name: currentPlayer.username,
			level: currentPlayer.level,
			wat: currentPlayer.wat,
			kills_total: currentPlayer.kills_total,
			kills_bosses: currentPlayer.kills_bosses,
			waves: currentPlayer.waves,
			id: currentPlayerRank, // Место в топе
			isCurrentPlayer: true // Помечаем как текущего игрока
		});

		// Добавляем остальных игроков с правильным местом
		allPlayers.forEach((player, index) => {
				sortedPlayers.push({
					name: player.username,
					level: player.level,
					wat: player.wat,
					kills_total: player.kills_total,
					kills_bosses: player.kills_bosses,
					waves: player.waves,
					id: index + 1, // Место в топе (индекс + 1)
					isCurrentPlayer: false // Не текущий игрок
				});
			
		});

		// Теперь sortedPlayers содержит текущего игрока на нулевом индексе и остальных игроков с правильным местом
		const obj = {target: "rating", array: sortedPlayers}
        // Возвращаем отсортированный список игроков
		GMS_API.send_async_event_social(obj);
    
}
async function StartGame() {
    const id = getTelegramId(); // Retrieve the Telegram ID
    try {
        const response = await fetch(`${apiUrl}players/${id}/start_game`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });	

        // Check if the response is OK
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Return the success status
		GMS_API.send_async_event_social({ target: "StartGame", success: data.success, hash: data.hash });
    } catch (error) {
        console.error('Fetch error:', error);
		GMS_API.send_async_event_social({ target: "StartGame", success: false, hash: data.hash });
    }
}
function buyEnergy() {
	window.location.href = `https://game.hellopixel.network/Auth/`;
}
async function achieveMent(n){
	
    try {
		telegram_id = getTelegramId()
		const response = await fetch(`${apiUrl}players/${telegram_id}/claim_wat/${n}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		});	
	}catch (error) {
        console.error('Achievement claim error:', error);
    }
}