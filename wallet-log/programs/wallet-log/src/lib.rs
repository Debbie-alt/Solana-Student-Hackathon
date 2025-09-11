use anchor_lang::prelude::*;

declare_id!("7cGpQxyVi7HbUZsiqH3EfRwcARzV3otxMCqMt5P4uRih");

#[program]
pub mod wallet_log {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
